require('dotenv').config();

import * as Lamden from 'lamden-js';

const { SK, VK } = process.env;

const networkInfo = {
    hosts: ['https://testnet-master-1.lamden.io:443'],
    type: 'testnet'
}

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export async function handler(event, context, callback) {
  const { account } = event.queryStringParameters
  const txInfo = {
    uid: '',
    senderVk: VK,
    contractName: 'con_faucet',
    methodName: 'give',
    kwargs:{
        'account': account
    },
    stampLimit: 65
  }

  const txBuilder = new Lamden.TransactionBuilder(networkInfo, txInfo)
  let res;
  try{
    res = await txBuilder.send(SK).catch(err => res.errors = [err])
    console.log(res)
    if (!res.errors){
      res = await txBuilder.checkForTransactionResult().catch(err => res.errors = [err])
      if (res.result !== "None"){
        res.errors = [res.result]
      }
      console.log(res)
    }
  } catch (e){}


  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(res),
  })
}