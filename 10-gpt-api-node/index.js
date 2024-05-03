import OpenAI from "openai";

const openai = new OpenAI({   
    organization: "org-QZvb5fS0jg2UKet6kgUtH1qH",
    apiKey: "sk-proj-a2tbGSKUIRpoHjPy3xvbT3BlbkFJBhsODBlAP9rRxvXg2Nd7",


});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Quem é você"}]
})

console.log(chatCompletion.choices[0].message);