docker rm -f website

docker pull alexsthub/website

export TLSCERT=/etc/letsencrypt/live/alexst.me/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/alexst.me/privkey.pem

docker run \
  -d \
  -p 443:443 -p 80:80 \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  -e TLSKEY=$TLSKEY \
  -e TLSCERT=$TLSCERT \
  --name website \
  alexsthub/website

exit