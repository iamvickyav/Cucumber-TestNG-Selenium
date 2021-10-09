pipeline {
    agent any
    tools {
        maven 'MAVEN_PATH'
        jdk 'jdk8'
    }
    stages {
        stage("Tools initialization") {
            steps {
                sh "mvn --version"
                sh "java -version"
            }
        }
        stage("Checkout Code") {
            steps {
                checkout scm
            }
        }
        stage("Check Code Health") {
            when {
                not {
                    anyOf {
                        branch 'master';
                        branch 'develop'
                    }
                }
           }
           steps {
               sh "mvn clean compile"
            }
        }
        stage("Run Test cases in LambdaTest") {
            when {
                branch 'develop';
            }
            environment {
                LAMBDATEST_CRED = credentials('Lambda-Test-Credentials-For-Multibranch')
                LT_USERNAME = "$LAMBDATEST_CRED_USR"
                LT_ACCESS_KEY = "$LAMBDATEST_CRED_PSW"
            }
           steps {
               sh "mvn test"
            }
        }
    }
 }