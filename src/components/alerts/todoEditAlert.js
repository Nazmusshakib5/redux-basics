import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { editTodo } from "../../redux/state/Todo/todoSlice";

export function TodoEditAlert(index,item){
    Swal.fire({
        title: "Update Todo",
        input: "text",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Update",
        inputValue:item,
        inputValidator: (value) => {
        if (value) {
            store.dispatch(editTodo({index:index,todo:value}))
        }  
    }
    })
}
