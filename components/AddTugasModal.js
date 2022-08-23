const AddTugasModal = () => {
    const style={
        div: "",
        input: "text-gray-100",
        label: ""
    }
    
    return (
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                    <label for="my-modal-3" className="btn">Yay!</label>
                </div>
            </div>
        </div>
    );
}
 
export default AddTugasModal;