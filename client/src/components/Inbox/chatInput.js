import React from "react"


const ChatInput = ({ formik, conversationId }) => {


    return <>
        <form onSubmit={formik.handleSubmit}>
            <div class="flex-grow-0 py-4 px-4 border-top">
                <div class="input-group flex-nowrap">
                    <input
                        type="text"
                        id="text"
                        class="form-control"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.text}

                    />
                    {/* <button type="submit" class="btn btn-primary btn-lg rounded-circle"></button> */}
                </div>
            </div>
        </form>
    </>
}

export default ChatInput