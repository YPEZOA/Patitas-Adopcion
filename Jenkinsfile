pipeline{
  agent any
  stages {
      stage('Build'){
          steps{
              echo "Etapa build no disponible"
            }
      }
      stage("Test"){
          steps{
              echo "## Install dependecies ##"
              npm install

              echo "## Run tests ##"
              npm run test
            }
      }
      stage("Deploy"){
          steps{
            echo "Aqui los comandos para lo que queremos"
            }
        }
    }
}


