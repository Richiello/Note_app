import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { TextField, CardHeader, CardContent, Button } from "../styles/styles";
import { categoryFilters } from "../actions";
import ModalAdd from "../components/Modal";
import moment from "moment";

const AddNote = ({ dispatch }) => {
    const [category, setCategory] = useState("ALL");
    const [showModal, setShowModal] = useState(false);

    const onchange = (event) => {
        setCategory(event.target.value);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const addNewNote = (event) => {
        let noteText = input.value;
        event.preventDefault();
        if (!noteText.trim()) {
            return;
        }
        dispatch(addNote(noteText, category, newTimeStamp));
        noteText = "";
        toggleModal();
    };

    const newTimeStamp = moment().format("D MMM YYYY HH:mm");

    let input;

    return (
        <>
            <Fab
                onClick={() => {
                    window._paq.push([
                        "trackEvent",
                        "Button Click",
                        "Isa",
                        "Member",
                    ]);
                    window._paq.push([
                        "trackEvent",
                        "Button Click",
                        "Isas",
                        "Member",
                    ]);
                    console.log(window._paq);
                    alert = "Clicked";
                    toggleModal();
                }}
                type="submit"
                color="secondary"
                variant="extended"
                aria-label="add"
            >
                Add new note <AddIcon />
            </Fab>
            {showModal && (
                <ModalAdd show={toggleModal}>
                    <form
                        style={{ width: "100%" }}
                        onSubmit={(e) => addNewNote(e)}
                    >
                        <CardHeader>
                            <p>Add new note:</p>
                            <select onChange={(e) => onchange(e)}>
                                <option value="" default>
                                    {" "}
                                    Choose category{" "}
                                </option>
                                {Object.keys(categoryFilters).map(
                                    (o, index) => (
                                        <option
                                            key={index}
                                            value={categoryFilters[o]}
                                        >
                                            {categoryFilters[o]}
                                        </option>
                                    )
                                )}
                            </select>
                        </CardHeader>
                        <CardContent>
                            <TextField
                                placeholder="* Text"
                                resize="none"
                                ref={(node) => (input = node)}
                            />
                            <Button type="submit"> Save </Button>
                        </CardContent>
                    </form>
                </ModalAdd>
            )}
        </>
    );
};

export default connect()(AddNote);
