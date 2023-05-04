const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');
const selectOperationNode = document.querySelector('.js-select-operatiion');


btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({
        a,
        b,
        operation
    });

    outputNode.innerHTML = result;

});
