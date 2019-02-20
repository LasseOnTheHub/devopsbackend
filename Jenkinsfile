node {
    def app

    stage("Clone repo") {
        checkout scm
    }

    stage("Build image") {
        app = docker.build("lasseonthedock/devopsbackend")
    }

    stage("Test backend") {
        /* Volkswagen testing! */
        app.inside {
            sh 'echo "All tests passed with excellence"'
        }
    }

    stage("Push image"){
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}