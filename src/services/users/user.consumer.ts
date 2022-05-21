import amqp from 'amqplib';

const init = async () => {
    try {
        const connection = await amqp.connect('amqp://user:password@localhost:5672');
        console.log('Rabbit connected');

        const channel = await connection.createChannel();
        console.log('Channel opened');

        channel.consume('hello', (msg) => {
            console.log(msg?.fields)
            console.log(msg?.content.toString())
        })

        channel.ackAll()

        return channel
    } catch (err) {
        return process.exit(1);
    }
};

init();