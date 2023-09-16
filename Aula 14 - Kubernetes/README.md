## Comandos do kubernetes
    - kubectl proxy
    - kubectl get pods
    - kubectl get pods -o go-template="{{.apiVersion}}"
    - kubectl get pods -o go-template="Hello, Go Templates"
    - kubectl get pods -o go-template="{{.items}}"
    - kubectl get pods -o go-template="{{range .items}}{{.metadata}}{{end}}" -> Iteração dentro do kubectl
    - set POD_NAME=meu-primeiro-deployment-cc666ccc8-rj6xr
    - echo %POD_NAME%
    - curl http://localhost:8001/api/v1/namespaces/default/pods/%POD_NAME%
    - kubectl logs %POD_NAME%
    - kubectl exec %POD_NAME% -- ls
    - kubectl exec %POD_NAME% -- env
    - kubectl exec %POD_NAME% -- date
    - kubectl exec -ti %POD_NAME% -- bash
        - ls
        - cat server.js
        - curl localhost:8080
        - exit
    - kubectl get services
    - kubectl expose deployment/meu-primeiro-deployment --type="NodePort" --port 8080
    - kubectl describe services/meu-primeiro-deployment
    - set NODE_PORT=32633 
    - kubectl describe deployment
    - kubectl get pods -l app=meu-primeiro-deployment
    - kubectl label pod %POD_NAME% versao=v1
    - kubectl delete service -l app=meu-primeiro-deployment
    - kubectl exec -ti %POD_NAME% -- curl localhost:8080
    - kubectl get rs
    - kubectl scale deployments/meu-primeiro-deployment --replicas=16 -> Cria 16 pods nesse exemplo
    - kubectl get service meu-primeiro-deployment -o go-template="{{(index .spec.ports 0).nodePort}}"
    - set NODE_PORT=30363
    - curl 192.168.56.1:%NODE_PORT% -> IP do pc da maua no momento
    - kubectl delete deployments/meu-primeiro-deployment



