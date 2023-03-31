import {listForm, typeForm} from "../../../types/typeForm";
import {statusInput} from "../../../types/statusInput";
export interface inputForm {
    id: listForm
    status: statusInput,
    value:string
}
export interface authFormState {
    typeForm: typeForm,
    file: Blob | '',
    inputName: inputForm,
    inputPassword: inputForm,
    inputEmail: inputForm ,
}
