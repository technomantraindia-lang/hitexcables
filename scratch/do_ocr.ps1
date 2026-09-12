
 = 'C:\Users\Technomantra\OneDrive\Desktop\hitexcables\about us page.png'

Add-Type -TypeDefinition @'
using System;
using System.Threading.Tasks;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;

public class OcrRunner
{
    public static string DoOcr(string path)
    {
        var task = Task.Run(async () =>
        {
            var file = await StorageFile.GetFileFromPathAsync(path);
            using (var stream = await file.OpenAsync(FileAccessMode.Read))
            {
                var decoder = await BitmapDecoder.CreateAsync(stream);
                var bitmap = await decoder.GetSoftwareBitmapAsync();
                var engine = OcrEngine.TryCreateFromUserProfileLanguages();
                var res = await engine.RecognizeAsync(bitmap);
                return res.Text;
            }
        });
        return task.Result;
    }
}
'@

[OcrRunner]::DoOcr()
