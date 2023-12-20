import { UtilsType } from "../Domain/Interface/ServiceType/Utils.interface";

const Utils:UtilsType = {
    getRandomNumber : (min, max, exclusiveNumber) => {
        while(true) {
            let result = Math.floor(Math.random() * (max - min) + min);
            if(result != exclusiveNumber) {
                return result;
            }
        }
    }
}


export {Utils};