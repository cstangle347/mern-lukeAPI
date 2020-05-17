import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {
    const [formState, setFormState] = useState({
        options: "people",
        id: ""
    });

    function formChange(e){
        setFormState({
            ...formState,
            [(e).target.name] : (e).target.value
        })
    }

    function submitForm(e) {
        (e).preventDefault();

        navigate("/" + formState.options + "/" + formState.id)
    }

    return(
        <Form onSubmit = {submitForm}>
            <Form.Label>Search For:</Form.Label>
            <Form.Control
            as = "select"
            name = "options"
            value = {formState.options}
            onChange = {formChange}>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
            </Form.Control>
            <Form.Label>ID:</Form.Label>
            <Form.Control
            name = 'id'
            value = {formState.id}
            onChange = {formChange}>
            </Form.Control>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    )
}

export default SearchBar