id="1628460024008458"
secret="$1"
redirect="https://www.upgrad.com/"
code="$2"
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=$id \
  -F client_secret=$secret \
  -F grant_type=authorization_code \
  -F redirect_uri=$redirect \
  -F code=$code \
  | jq -r ".access_token"

