create table users (
  user_id VARCHAR(30) not null
  , name VARCHAR(30) not null
  , primary key (user_id)
) ;

create table images (
  image_id integer not null auto_increment
  , user_id VARCHAR(30) not null
  , is_used boolean not null
  , primary key (image_id)
) ;

alter table images
  add constraint images_FK1 foreign key (user_id) references users(user_id);