import { ConditionValue } from "./Enums/ConditionValue"

const Snake = {
    startX : ConditionValue.startX,
    startY : ConditionValue.startY,
    stateRight : false,
    stateLeft : false,
    stateUp : false,
    stateDown : false,
    bodys : initBodys(),
    

    initBodys : () => {
        return [startX, startY];
    }
}



export { Snake };