
const btn = document.querySelector('#btn')

btn.addEventListener('click', calcular)

function calcular() {

    const show_resultado = document.querySelector('#resultado')
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    altura = Number(altura)
    peso = Number(peso)


    const res = peso / (altura ** 2)
    const resultado = res.toFixed(1)

    if (resultado < 18.5) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica magreza. <br> A magreza ou baixo peso é um quadro de saúde preocupante, por isso vá a um médico para uma avaliação melhor!.`
    } else if (resultado <= 24.9) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica peso adequado. <br> Tudo indica que está bem, mas procure avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado..`
    } else if (resultado <= 29.9) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica sobrepeso. <br> O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então procure um médico e reveja hábitos para mudar esse quadro!.`
    } else if (resultado <= 34.9) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica grau de Obesidade II. <br> O grau de Obesidade I é o primeiro estágio de obesidade e trás consigo a possibilidade de doenças graves, portanto, vá á um médico para examinar melhor seu quadro.`
    } else if (resultado <= 39.9) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica grau de Obesidade II. <br> O grau de Obesidade II é mais evoluido em relação a classificação do anterior, portanto, urge a necessidade de buscar orientação nutricional e médica para reverter esse quadro.`
    } else if (resultado >= 40) {
        show_resultado.innerHTML = `O resultado do cálculo de IMC é ${resultado} que indica grau de Obesidade III. <br> O grau de Obesidade III é mais evoluido em relação a classificação do anterior, portanto, urge a necessidade de buscar orientação nutricional e médica para reverter esse quadro, pois estamos diante a uma possibilidade muito alta de desenvolver doenças graves ou alguma fatalidade.`
    } else {
        show_resultado.innerHTML = 'Este projeto foi feito para por em prática os fundamentos de programação em Javascript. '
    }
}