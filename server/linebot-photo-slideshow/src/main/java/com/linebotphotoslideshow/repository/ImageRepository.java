package com.linebotphotoslideshow.repository;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import com.linebotphotoslideshow.domain.Image;

@Repository
@Mapper
public interface ImageRepository {

    @Select("""
            INSERT INTO images(
              user_id
              , is_used
            )
            VALUES(
              #{userId}
              , #{isUsed}
            )
            """)
    @Options(useGeneratedKeys = true, keyColumn = "image_id", keyProperty = "imageId")
    public void insert(Image image);

    @Select("""
            SELECT
              *
            FROM
              images
            WHERE
              is_used IS FALSE
            ORDER BY
              image_id
            LIMIT 1
            """)
    public Image selectUnusedImage();

    @Update("""
            UPDATE
              images
            SET
              is_used = TRUE
            WHERE
              image_id = #{imageId}
            """)
    public void updateToUsed(@Param("imageId") int imageId);

}
