# "Traducción" del script de shell test-dockerignore.sh a PowerShell
# Crear el Dockerfile.build-context con el contenido necesario
@"
FROM busybox
WORKDIR /build-context
COPY . /build-context
"@ | Out-File -FilePath Dockerfile.build-context

# Construir la imagen Docker
docker build -f Dockerfile.build-context -t build-context .

# Ejecutar la imagen Docker y encontrar los archivos de WORKDIR y calcular su peso
docker run --rm -it build-context /bin/sh -c "find . && echo -e '\n/build-context Size:' && du -sh ."

# Eliminar el Dockerfile.build-context
Remove-Item Dockerfile.build-context
