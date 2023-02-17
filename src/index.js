import { createTable, params as params_table } from './commands/createTable'
import { params as params_item, putItem } from './commands/putItem'

/*
#==================#
| CRIAR UMA TABELA |
#==================#
*/

const TABLE_NAME = 'Music'
params_table.TableName = TABLE_NAME
params_table.AttributeDefinitions = [
    {
        AttributeName: 'Artist',
        AttributeType: 'S'
    },
    {
        AttributeName: 'SongTitle',
        AttributeType: 'S'
    },
    {
        AttributeName: 'AlbumTitle',
        AttributeType: 'S'
    },
    {
        AttributeName: 'SongYear',
        AttributeType: 'S'
    }
]
params_table.KeySchema = [
    {
        AttributeName: 'Artist',
        KeyType: 'HASH',
    },
    {
        AttributeName: 'SongTitle',
        KeyType: 'RANGE',
    }
]
params_table.ProvisionedThroughput = {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5
}
const table = await createTable(params_table)

/*
#=================#
| INSERIR UM ITEM |
#=================#
*/

params_item.TableName = TABLE_NAME
params_item.Item = require('../jsons/itemmusic.json')
putItem(params_item)
