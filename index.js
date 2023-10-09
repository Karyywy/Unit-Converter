const inputData = document.getElementById("input-data")
const convertDataBtn = document.getElementById("convert-data")
const lengthEl = document.getElementById("length-el")
const volumnEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const metertoFeet = 3.281
const litertoGallon = 0.264
const kilotoPound = 2.204

convertDataBtn.addEventListener('click', function(){
    let baseValue = inputData.value
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * metertoFeet).toFixed(3)} feets | ${baseValue} feet = ${(baseValue / metertoFeet).toFixed(3)} meters`

    volumnEl.textContent = `${baseValue} liters = ${(baseValue * litertoGallon).toFixed(3)} gallons| ${baseValue} gallons = ${(baseValue / litertoGallon).toFixed(3)} liters`

    massEl.textContent = `${baseValue} kilos = ${(baseValue * kilotoPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kilotoPound).toFixed(3)} kilos`
    })


//     let feetValue = (baseValue * metertoFeet).toFixed(3)
//     let meterValue = (baseValue / metertoFeet).toFixed(3)
    
//     let gallonValue = (baseValue * litertoGallon).toFixed(3)
//     let literValue = (baseValue / litertoGallon).toFixed(3)
    
//     let poundValue = (baseValue * kilotoPound).toFixed(3)
//     let kiloValue = (baseValue / kilotoPound).toFixed(3)
    
//     lengthEl.textContent = `${baseValue} meters = ${feetValue} feet | ${baseValue} feet = ${meterValue} meters`
    
//     volumnEl.textContent = `${baseValue} liters = ${gallonValue} gallons| ${baseValue} gallons = ${literValue} liters`
    
//     massEl.textContent = `${baseValue} kilos = ${poundValue} pounds | ${baseValue} pounds = ${kiloValue} kilos`
    
// })