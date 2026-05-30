# Imagem do blog WordPress da TCN Digital.
# Tema e mu-plugins ficam embutidos na imagem; o WordPress core e a config
# (wp-config.php) são gerados pelo entrypoint oficial a partir das variáveis de ambiente.
FROM wordpress:php8.2-apache

# Copiamos para /usr/src/wordpress/wp-content para que o entrypoint oficial
# distribua o tema/mu-plugins junto com o core ao iniciar o container.
COPY themes/tcn-blog /usr/src/wordpress/wp-content/themes/tcn-blog
COPY mu-plugins /usr/src/wordpress/wp-content/mu-plugins

# Recomendações de upload para posts com imagens.
RUN { \
      echo 'upload_max_filesize = 32M'; \
      echo 'post_max_size = 32M'; \
      echo 'memory_limit = 256M'; \
      echo 'max_execution_time = 120'; \
    } > /usr/local/etc/php/conf.d/tcn-uploads.ini
