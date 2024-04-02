pipeline{
  agent any
  stages {
      stage('Install Deps'){
          steps{
            sh 'npm install'
          }
        }
      stage('Build'){
          steps{
              echo "Etapa build no disponible"
          }
      }
      stage("Test"){
          steps{
              echo "## Run tests ##"
              sh 'make check || true' 
              junit '**/target/*.xml'
          }
      }
      stage("Deploy"){
          steps{
             echo "Aqui los comandos para lo que queremos"
          }
        }
    }
}


