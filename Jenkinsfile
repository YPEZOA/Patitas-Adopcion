pipeline{
  agent any
  stages {
      stage('Install Deps'){
          steps{
              dir('build_node'){
                  sh "npm install"
                }
            }
        }
      stage('Build'){
          steps{
              echo "Etapa build no disponible"
            }
      }
      stage("Test"){
          steps{
            dir('build_node'){
              echo "## Run tests ##"
              npm run test
            }
          }
      }
      stage("Deploy"){
          steps{
             echo "Aqui los comandos para lo que queremos"
            }
        }
    }
}


