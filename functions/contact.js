// Dans votre fichier contact.js
const mailgun = require('mailgun-js');

const mg = mailgun({
  apiKey: '3dc00a4cf3303937e6e224d74e9277fb-30b58138-2b1eecb3',
  domain: 'pages.lu',
});

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  const message = {
    from: `${data.prenom} ${data.nom} <${data.email}>`,
    to: 'steve.piron@gmail.com',
    subject: 'Nouveau message de contact',
    text: `${data.message}\n\nTéléphone: ${data.telephone}`,
  };

  try {
    await mg.messages().send(message);
    return {
      statusCode: 200,
      body: 'E-mail envoyé avec succès!',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'e-mail' }),
    };
  }
};
