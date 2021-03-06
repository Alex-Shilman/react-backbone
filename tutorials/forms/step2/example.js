// initialize react-backbone
var React = require('react');
var Backbone = require('backbone');
var _ = require('underscore');
var ReactBackbone = require('react-backbone');


// MODEL
var MyModel = Backbone.Model.extend({
  // add a dumb validation method which ensures first/last name length are > 5
  validate: function(attributes) {
    var errors = [];
    if (attributes.hasOwnProperty('firstName')) {
      if (!attributes.firstName || attributes.firstName.length < 5) {
        errors.push({firstName: 'The first name must be > 5 characters'});
      }
    }
    if (attributes.hasOwnProperty('lastName')) {
      if (!attributes.lastName || attributes.lastName.length < 5) {
        errors.push({lastName: 'The last name must be > 5 characters'});
      }
    }
    return errors.length && errors;
  }
});


// COMPONENTS

// create a reusable components which represent a label with an input field
var TextField = ReactBackbone.input.Text;
var InputWithLabel = React.createClass({
  getInitialState: function() {
    return { id: _.uniqueId('form') };
  },

  render: function() {
    return <div>
      <label htmlFor={this.state.id}>{this.props.label}</label>
      <div>
        <TextField id={this.state.id} type="text" ref="input" model={this.props.model} name={this.props.name}/>
      </div>
    </div>;
  },

  // allow the value of the input component to be retrieved
  getValue: function() {
    return this.refs.input.getValue();
  }
});

// and here is the overall form component
var TestComponent = React.createClass({
  getInitialState: function() {
    // make sure this.state is not null
    return {};
  },

  // listen for the invalid event so we can message when the data is bad
  componentDidMount: function() {
    this.props.model.on('invalid', this.onInvalid);
  },
  componentWillUnmount: function() {
    this.props.model.off('invalid', this.onInvalid);
  },

  render: function() {
    var error = this.state.error;

    // if we've got an error, show it
    var errorComponent = error && (
      <div>
        Error: {error}
        <br/><br/>
      </div>
    );

    // return the form and input contents
    return <form onSubmit={this.onSubmit}>
      {errorComponent}
      <InputWithLabel ref="firstName" name="firstName" label="First Name" model={this.props.model}/>
      <InputWithLabel ref="lastName" name="lastName" label="Last Name" model={this.props.model}/>
      <button type="submit">Click me</button>
    </form>;
  },

  onSubmit: function(ev) {
    ev.preventDefault();
    var self = this,
        attr = {};

    // populate the attr object with the user input
    _.each(['firstName', 'lastName'], function(key) {
      attr[key] = self.refs[key].getValue();
    });

    // set the model input and alert if all is ok.  if there are validation issues, the
    // onInvalid method will be executed because of the model "invalid" bindings
    if (this.props.model.set(attr, {validate: true})) {
      this.setState({error: undefined});
      alert('model validated');
    }
  },

  onInvalid: function(model, errors) {
    // for simplicity, we'll just show the first error
    var errorStr = [];
    _.each(errors, function(error) {
      _.each(error, function(message) {
        errorStr.push(message);
      });
    });
    this.setState({error: errorStr.join(', ')});
  }
});


// INITIAL RENDER
var model = new MyModel({
  firstName: 'John',
  lastName: 'Doe'
});
React.render(<TestComponent model={model}/>, document.body);
