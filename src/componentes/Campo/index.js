import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {

    const verificarHexadecimal = () => {
        if (type === 'color') {
            // ^ => início da string
            // # => precisa ter um # no começo
            // [0-9a-fA-F]{6} => precisa ter 6 caracteres entre 0-9, a-f ou A-F
            // $ => fim da string
            // Ou seja, a expressão só retorna true se o valor for exatamente igual a, por exemplo, #1A2B3C.
            // a função test recebe o valor do usuário como parâmetro para verificar se bate com a expressão regex
            if (/^#[0-9a-fA-F]{6}$/.test(valor)) {
                return valor
            } else {
                return "#000000"
            }
        } else {
            return valor
        }
    }

    return (
        <div className={`campo ${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={verificarHexadecimal()}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo