import fitz  # PyMuPDF
import os
from pathlib import Path

def extract_images_from_pdfs(pdf_dir, output_dir):
    pdf_path = Path(pdf_dir)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    for pdf_file in pdf_path.glob("*.pdf"):
        print(f"Processing {pdf_file.name}...")
        doc = fitz.open(pdf_file)
        
        destination_name = pdf_file.stem.lower().replace(" ", "_")
        
        image_count = 0
        for page_index in range(len(doc)):
            page = doc[page_index]
            image_list = page.get_images(full=True)
            
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                image_filename = f"{destination_name}_{image_count}.{image_ext}"
                image_save_path = output_path / image_filename
                
                with open(image_save_path, "wb") as f:
                    f.write(image_bytes)
                
                print(f"  Extracted: {image_filename}")
                image_count += 1
        doc.close()

if __name__ == "__main__":
    pdf_directory = "Image"
    gallery_directory = "public/images/gallery"
    extract_images_from_pdfs(pdf_directory, gallery_directory)
