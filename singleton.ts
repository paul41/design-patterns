import {MongoClient,Db} from 'mongodb';
class DbInstance{
    private static instance: Db;
    private static client: MongoClient;
    private constructor(){}

    static async getInstance():Promise<Db>{
        if(!this.instance){
            const URL = "mongodb://localhost:27017"
            const dbName = "sample" 
            try {
                this.client = await MongoClient.connect(URL)
                this.instance = this.client.db(dbName);
            } catch (err) {
                console.error('DB Connection Error:', err);
                throw err;
            }
        }
        return this.instance;
    }
}
export default DbInstance