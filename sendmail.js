/*
    Autor: Delia Macias Urzua
    correo: demamaciasur@ittepic.edu.mx
    NoControl: 15401021
    Instituto Tecnológico de Tepic
*/

const config = require('./_config');
var formato= require("./codeHTML");
const mailjet = require ('node-mailjet')
.connect(config.MJ_APIKEY_PUBLIC, config.MJ_APIKEY_PRIVATE);


function send(env) {
    const request = mailjet
    .post("send", {
       version: 'v3.1'
    })
    .request({
        "Messages":[
                {
                "From": {
                        "Email": "demamaciasur@ittepic.edu.mx",
                        "Name": "15401021"
                },
                "To": [
                        {
                        "Email": `${env.to}`,
                        "Name": `${env.name}`
                        }
                ],
                "Subject": `${env.subject}`,
                "TextPart": `${env.textpart}`,
                "HTMLPart": formato(env.name),
                'Attachments': [{
                    "ContentType": "text-plain",
                    "Filename": "informacion.txt",
                    "Base64Content": "CgoKCglEZWxpYSBNYWNpYXMgVXJ6dWEKCTE1NDAxMDIxCglkZW1hbWFjaWFzdXJAaXR0ZXBpYy5lZHUubXgK", // Base64 for "This is your attached file!!!"
                  }]
                }
        ]
    });
    request
    .then(
        (result)=>{
            console.log("Se envió");
            console.log(result);
        }
    )
    .catch(
        (error)=> {
            console.log("Falla");
            console.log(error);
        }
    );
    
}
module.exports.send = send;
