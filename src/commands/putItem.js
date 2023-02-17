import { PutCommand } from "@aws-sdk/lib-dynamodb"
import { ddbClient } from "../libs/ddbclient"

export const params = {
    TableName: "",
    Item: {},
}

export const putItem = async (params) => {
  try {
    const data = await ddbClient.send(new PutCommand(params))
    console.log("Success - item added or updated", data)
    return data
  } catch (err) {
    console.log("Error", err.stack)
  }
}