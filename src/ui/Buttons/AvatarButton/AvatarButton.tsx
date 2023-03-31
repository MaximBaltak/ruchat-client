import React, {ChangeEvent, FC, useState} from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import style from './AvatarButton.module.scss'
import {SxProps} from '@mui/system';
import Avatar from '@mui/material/Avatar';

const iconStylePhotoMaterial: SxProps = {
    width: 36,
    height: 36,
    opacity: 0.6,
    color: 'white'
}
export const AvatarButton = () => {
    const [srcFile, setSrcFile] = useState<string>('')
    const change = (files: FileList | null) => {

        if (FileReader && files) {
            const fileReader = new FileReader()
            fileReader.onload = () => {
                setSrcFile(fileReader.result as string)
            }
            fileReader.readAsDataURL(files[0] as Blob)
        } else {
            setSrcFile('')
        }
    }
    return (
        <div style={{zIndex: 1}}>
            <input onChange={(e) => change(e.target.files)}
                   className={style.inputFile}
                   id='input-file-avatar'
                   type="file"
                   accept="image/png, image/jpeg"/>
            <label className={style.file} htmlFor="input-file-avatar">
                {
                    srcFile ? <Avatar src={srcFile} sx={{
                            width: '100%',
                            height: '100%',
                            border: 'solid 1px white'
                        }}/> :
                        <AddAPhotoIcon sx={iconStylePhotoMaterial}/>
                }
            </label>
        </div>
    )
}
