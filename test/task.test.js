import * as chai from 'chai'; 
import chaiHttp from 'chai-http';
import server from '../server.js';  
const { expect } = chai;

chai.use(chaiHttp);

describe('Task API', () => {
    it('should get all tasks', (done) => {
        chai.request(server)
            .get('/api/tasks')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                done();
            });
    });

    it('should create a new task', (done) => {
        let task = {
            assignedTo: "John Doe",
            status: "Not Started",
            dueDate: "2024-12-31",
            priority: "Normal",
            description: "Test task"
        };
        chai.request(server)
            .post('/api/task')
            .send(task)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('assignedTo').eql('John Doe');
                done();
            });
    });

    
});