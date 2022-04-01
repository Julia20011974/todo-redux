import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

function TodoForm({ todo, addTodo, editTodo }) {
  return (
    <div>
      <Formik
        initialValues={{ content: '' }}
        onSubmit={(values, { resetForm }) => {
          if (todo.clicked) editTodo(todo.id, values.content, todo.clicked);
          else { addTodo(values.content); }
          resetForm({ values: '' });
        }}
      >
        {({
          values, handleSubmit, handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="content"
              onChange={handleChange}
              value={values.content}
            />
            <button type="submit">{todo.clicked ? 'изменить' : 'добавить' }</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

TodoForm.propTypes = {
  todo: PropTypes.objectOf(Object).isRequired,
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoForm;
