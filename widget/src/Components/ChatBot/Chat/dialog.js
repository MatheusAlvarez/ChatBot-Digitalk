let dialog = [
    {
        user: "Olá",
        bot: "Olá, como posso te ajudar?"
    },
    {
        user: "Hora",
        bot: new Date().toLocaleTimeString(),
    },
    {
        user: "Hoje",
        bot: new Date().toLocaleDateString(),
    }
]

export default dialog;