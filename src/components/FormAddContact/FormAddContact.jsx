import styles from '../FormAddContact/FormAddContacts.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class FormAddContact extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className={styles.formContacts}>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Name</h3>
          <input
            onChange={this.props.handleInput}
            className={styles.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Number</h3>
          <input
            onChange={this.props.handleInput}
            className={styles.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
