require('dotenv').config();

import * as Lamden from 'lamden-js';

const { SK, VK } = process.env;

const networkInfo = {
    hosts: ['https://testnet-master-1.lamden.io:443'],
    type: 'testnet'
}

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export async function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters)
  console.log({ SK, VK })

  const { account } = event.queryStringParameters
  const txInfo = {
    uid: '',
    senderVk: VK,
    contractName: 'con_dtau_faucet',
    methodName: 'give',
    kwargs:{
        'account': account
    },
    stampLimit: 50000
  }

  const txBuilder = new Lamden.TransactionBuilder(networkInfo, txInfo)
  try{
    var sendRes = await txBuilder.send(SK).catch(err => console.log(err))
    console.log(sendRes)
    var checkRes = await txBuilder.checkForTransactionResult().catch(err => console.log(err))
    console.log(checkRes)
  } catch (e){}


  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(checkRes),
  })
}