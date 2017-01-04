---
published: false
---
Hanya untuk catatan

Backup
[pre]mysqldump -u{user} -p {database} > {database}.sql[/pre]
Restore
[pre]mysql -u user -p databasename < backupname.sql[/pre]

With Compress je
Backup
[pre]mysqldump -u {user} -p {database} | gzip > {database}.sql.gz[/pre]
Restore
[pre]gzip -dc < {database}.sql.gz | mysql -u {user} -p {database}[/pre]

With CronJ
[pre]mysqldump -u {user} -p {database} | gzip > `date -I`.database.sql.gz[/pre]
[pre]gzip -dc < `date -I`.{database}.sql.gz | mysql -u {user} -p {database}[/pre]
