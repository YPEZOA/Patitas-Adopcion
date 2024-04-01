node {
  stage('checkout') {
     checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/YPEZOA/HuachitosApp']])
  }
  stage('Print files') {
    sh 'echo "Hello World"'
    sh 'ls -la'
  }

}

