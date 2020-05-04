docker rm -f website

docker pull alexsthub/website

docker run \
  -d \
  -p 443:443 -p 80:80 \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  -e TLSKEY="/etc/letsencrypt/live/alexst.me/privkey.pem" \
  -e TLSCERT="/etc/letsencrypt/live/alexst/me/fullchain.pem" \
  --name website \
  alexsthub/website

exit