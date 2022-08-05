
import ConfirmModal from "./ConfirmModal.js";
import ResultModal from "./ResultModal.js";

enum ModalType {
    ResultModal ="result" ,
    ConfirmModal="confirm"
}

class Modal  {
    modalClass!: ConfirmModal | ResultModal;
    // modalType:ModalConfig.ConfirmModal | ModalConfig.ResultModal
    constructor(modalType: string,finalScore ?:number) {
        const bodyElement = document.body
        switch (modalType) {
            case ModalType.ConfirmModal:
                console.log("in confirm start");   
                this.modalClass = new ConfirmModal()  
                this.modalClass.mount(bodyElement) 
                // this.modalClass.returnResponse()
                // this.modalClass.init()
                console.log("in confirm");       
                break;
            case ModalType.ResultModal:
                console.log("In result switch");
                this.modalClass = new ResultModal(finalScore as number)
              
                
                return
            default:
                break;
        }
    //   this.modalType = -1;
    }
}

export default Modal;