# RabbitMQ Setup Guide

This guide will help you to quickly start a RabbitMQ server using Docker.

## Prerequisites
- Docker must be installed and running on your system.

## Steps to Start RabbitMQ with Management Plugin

1. **Run RabbitMQ with Docker**

   To start RabbitMQ with the management plugin enabled, use the following command:
   
   ```bash
   docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
   
   This rabbit installed in pc, use command:
   docker start rabbitmq
   ```
   
   - The `-d` flag runs the container in detached mode.
   - `--name rabbitmq` gives the container the name "rabbitmq".
   - Port `5672` is the default port used by RabbitMQ for messaging.
   - Port `15672` is used for the RabbitMQ management web interface.

2. **Access RabbitMQ Management Interface**

   Once the container is running, you can access the RabbitMQ management interface by opening your browser and navigating to:
   
   ```
   http://localhost:15672
   ```

   - **Username**: `guest`
   - **Password**: `guest`

3. **Stopping and Removing the Container**



   If you need to stop and remove the RabbitMQ container, you can use the following commands:

   ```bash
   docker stop rabbitmq
   docker rm rabbitmq
   ```

## Troubleshooting

- If you receive an error indicating that the container name is already in use, you can either remove the existing container or start the new container with a different name:

  ```bash
  docker run -d --name rabbitmq_management -p 5672:5672 -p 15672:15672 rabbitmq:management
  ```

  This will create a container named "rabbitmq_management" instead.

## Additional Resources
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
- [Docker RabbitMQ Image on Docker Hub](https://hub.docker.com/_/rabbitmq)

