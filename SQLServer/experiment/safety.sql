/* 创建登录账户 */
create login zln with password = 'zhanglening', default_database = experiment;
/* 为登录账户创建数据库用户 */
create user zln for login zln;
/* 赋予用户db_owner角色权限 */
exec sp_addrolemember 'db_owner', zln;
/* 创建角色: select_role; 分配权限: 对4个表的查询 */
create role select_role;
grant select on Course to select_role;
grant select on Score to select_role;
grant select on Student to select_role;
grant select on Teacher to select_role;
/* 创建角色: selection_and_insert_role; 分配权限: 对4个表的查询和插入 */
create role selection_and_insert_role;
grant select, insert on Course to selection_and_insert_role;
grant select, insert on Score to selection_and_insert_role;
grant select, insert on Student to selection_and_insert_role;
grant select, insert on Teacher to selection_and_insert_role;
/* 创建角色: test_manager_role; 分配权限: 对4个表的所有权限 */
/* 关于ALL permission的说明 */
/* The ALL permission is deprecated and maintained only for compatibility. */
/* It DOES NOT imply ALL permissions defined on the entity. */
create role test_manager_role;
grant all privileges on Course to test_manager_role;
grant all privileges on Score to test_manager_role;
grant all privileges on Student to test_manager_role;
grant all privileges on Teacher to test_manager_role;
/* 为用户分配对4个表的所有权限, 并允许用户将所拥有的权限授予其他用户 */
grant all privileges on Course to zln with grant option;
grant all privileges on Score to zln with grant option;
grant all privileges on Student to zln with grant option;
grant all privileges on Teacher to zln with grant option;
/* 回收用户的对4个表的查看权限 */
revoke select on Course from zln cascade;
revoke select on Score from zln cascade;
revoke select on Student from zln cascade;
revoke select on Teacher from zln cascade;
