const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const table = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, email, message } = body;

  const params = {
    TableName: table,
    Item: {
      id: Date.now().toString(),
      name,
      email,
      message,
      submittedAt: new Date().toISOString()
    }
  };

  await db.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message received.' })
  };
};
Add Lambda handler for storing contact form submissions
