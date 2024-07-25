import React, { useState } from "react";

import "./Modal.css";
import { Form, Field, FormSpy } from 'react-final-form'

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const formState =
    defaultValue || {
      id: "",
      name: "",
      inn: "",
      kpp: "",
      address: ""
    };

  const required = value => (value ? undefined : 'Required')

  const handleSubmit = (e) => {
    onSubmit(e);
    closeModal();
  };

  return (
      <div
          className="modal-container"
          onClick={(e) => {
              if (e.target.className === "modal-container") closeModal();
          }}
      >
      <Form onSubmit={handleSubmit}>
        { (props) => (
          <div className="modal">
            <form onSubmit={props.handleSubmit}>
              <Field name="id" validate={required} initialValue={formState.id}>
                { props => (
                    <div className="form-group">
                      <label htmlFor="id">Id</label>
                      <input name="id" {...props.input}/>
                      {props.meta.error && <span>{props.meta.error}</span>}
                    </div>
                )
                }
              </Field>
                <Field name="name" validate={required} initialValue={formState.name}>
                    { props => (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="name" {...props.input}/>
                            {props.meta.error && <span>{props.meta.error}</span>}
                        </div>
                    )
                    }
                </Field>
                <Field name="inn" validate={required} initialValue={formState.inn}>
                    { props => (
                        <div className="form-group">
                            <label htmlFor="inn">Inn</label>
                            <input name="inn" {...props.input}/>
                            {props.meta.error && <span>{props.meta.error}</span>}
                        </div>
                    )
                    }
                </Field>
                <Field name="kpp" validate={required} initialValue={formState.kpp}>
                    { props => (
                        <div className="form-group">
                            <label htmlFor="kpp">Kpp</label>
                            <input name="kpp" {...props.input}/>
                            {props.meta.error && <span>{props.meta.error}</span>}
                        </div>
                    )
                    }
                </Field>
                <Field name="address" validate={required} initialValue={formState.address}>
                    { props => (
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input name="address" {...props.input}/>
                            {props.meta.error && <span>{props.meta.error}</span>}
                        </div>
                    )
                    }
                </Field>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        )
        }
      </Form>
      </div>
  );
};
