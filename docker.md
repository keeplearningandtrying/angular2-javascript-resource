## Tutorials
* https://docs.docker.com/get-started/

* https://docker-curriculum.com/
* https://www.dontpanicblog.co.uk/2016/07/08/building-tagging-and-pushing-docker-images-with-maven/
* https://engineering.hipolabs.com/understand-docker-without-losing-your-shit/
* https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b

* https://www.javacodegeeks.com/2017/08/docker-java-developers-introduction.html

* https://developer.okta.com/blog/2017/05/10/developers-guide-to-docker-part-1
* https://developer.okta.com/blog/2017/08/28/developers-guide-to-docker-part-2
* https://developer.okta.com/blog/2017/10/11/developers-guide-to-docker-part-3

* https://codefresh.io/blog/hello-whale-docker-basics-getting-started-docker/

* https://github.com/BretFisher/udemy-docker-mastery

## 
* https://www.slideshare.net/davidcurrie/how-to-containerize-websphere-application-server-traditional-and-why-you-might-want-to
* https://www.slideshare.net/davidcurrie/ibm-websphere-application-server-traditional-and-docker


## 
* https://springframework.guru/running-spring-boot-in-a-docker-container/
* https://blog.docker.com/2017/05/spring-boot-development-docker/
* https://spring.io/guides/gs/spring-boot-docker/


##
* https://blog.frankel.ch/dockerfile-maven-based-github-projects/

##
* Using Docker Data Volume with a MySQL container - https://www.melvinvivas.com/using-docker-data-volume-with-a-mysql-container/
* MySQL Docker Containers: Understanding the basics - https://severalnines.com/blog/mysql-docker-containers-understanding-basics
* Docker Container Networking Tutorial - https://examples.javacodegeeks.com/devops/docker/docker-container-networking-tutorial/
* Networking with standalone containers - https://docs.docker.com/network/network-tutorial-standalone/
* Docker Volumes and Networks with Compose - https://www.linux.com/learn/docker-volumes-and-networks-compose
* Use volumes - https://docs.docker.com/storage/volumes/
* Docker Tutorial Series : Part 7 : Data Volumes  - https://rominirani.com/docker-tutorial-series-part-7-data-volumes-93073a1b5b72

##
https://github.com/vishnubob/wait-for-it
https://dev.to/hugodias/wait-for-mongodb-to-start-on-docker-3h8b
https://github.com/ufoscout/docker-compose-wait

## Volume
https://container-solutions.com/understanding-volumes-docker/

http://containertutorials.com/

https://github.com/dockersamples

https://docs.docker.com/samples/
https://github.com/docker/labs

## Multi-Stage Builds
https://dzone.com/articles/a-dockerfile-for-maven-based-github-projects

~~~~~~~~~~~~~~~~~~
FROM alpine/git

WORKDIR /app

RUN git clone https://github.com/spring-projects/spring-petclinic.git (1)

FROM maven:3.5-jdk-8-alpine

WORKDIR /app

COPY --from=0 /app/spring-petclinic /app (2)

RUN mvn install (3)

FROM openjdk:8-jre-alpine

WORKDIR /app

COPY --from=1 /app/target/spring-petclinic-1.5.1.jar /app (4)

CMD ["java -jar spring-petclinic-1.5.1.jar"] (5)
~~~~~~~~~~~~~~~~
FROM alpine/git as clone (1)

WORKDIR /app

RUN git clone https://github.com/spring-projects/spring-petclinic.git

FROM maven:3.5-jdk-8-alpine as build (2)

WORKDIR /app

COPY --from=clone /app/spring-petclinic /app (3)

RUN mvn install

FROM openjdk:8-jre-alpine

WORKDIR /app

COPY --from=build /app/target/spring-petclinic-1.5.1.jar /app

CMD ["java -jar spring-petclinic-1.5.1.jar"]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
FROM alpine/git as clone

ARG url (1)

WORKDIR /app

RUN git clone ${url} (2)

FROM maven:3.5-jdk-8-alpine as build

ARG project (3)

WORKDIR /app

COPY --from=clone /app/${project} /app

RUN mvn install

FROM openjdk:8-jre-alpine

ARG artifactid

ARG version

ENV artifact ${artifactid}-${version}.jar (4)

WORKDIR /app

COPY --from=build /app/target/${artifact} /app

EXPOSE 8080

CMD ["java -jar ${artifact}"] (5)

docker build --build-arg url=https://github.com/spring-projects/spring-petclinic.git\

  --build-arg project=spring-petclinic\

  --build-arg artifactid=spring-petclinic\

  --build-arg version=1.5.1\

  -t nfrankel/spring-petclinic - < Dockerfile
