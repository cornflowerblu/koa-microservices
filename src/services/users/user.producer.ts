import amqp from 'amqplib';

const init = async () => {
    try {
        const connection = await amqp.connect('amqp://user:password@localhost:5672');
        console.log('Rabbit connected');

        const channel = await connection.createChannel();
        console.log('Channel opened');

        await channel.assertQueue('hello', { autoDelete: false });
        console.log('Queue asserted');

        channel.sendToQueue('hello', Buffer.from(JSON.stringify({
            name: 'roger',
            age: 33
        })))

        return channel;
    } catch (err) {
        return process.exit(1);
    }
};

init();