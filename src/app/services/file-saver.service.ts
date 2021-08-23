import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { ImageModel } from '../models/image.model';

const IMAGE_URL: string = '/zuul/service/image'

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  constructor(private httpClient: HttpClient) {}

  uploadFile(fileName: string, file: File): Observable<ImageModel> {
    let uploadData = new FormData()
    uploadData.append('myFile', file, fileName)

    return this.httpClient.post<ImageModel>(IMAGE_URL, uploadData)
  }

  downloadFile(fileName: string): Observable<ImageModel> {
    let httpParams = new HttpParams().set('fileName', fileName)
    return this.httpClient.get<ImageModel>(IMAGE_URL, {params: httpParams})
  }
}
